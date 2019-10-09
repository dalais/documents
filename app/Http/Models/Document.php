<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int             $id
 * @property string          $title
 * @property string          $description
 * @property string          $created_at
 * @property string          $updated_at
 * @property string          $deleted_at
 */
class Document extends Model
{
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'documents';

    /**
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function file()
    {
        return $this->hasOne('App\Models\File');
    }
}
